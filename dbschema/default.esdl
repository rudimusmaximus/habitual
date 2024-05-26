using extension auth;

module default {
  scalar type Role extending enum<admin, user>;

  global current_user := (
    assert_single((
      select User
      filter .identity = global ext::auth::ClientTokenIdentity
    ))
  );

  type User {
    required identity: ext::auth::Identity {
      constraint exclusive;
    };
    required name: str;
    email: str {
      constraint exclusive;
    };

    user_role: Role {
      default := "user";
    };

    created: datetime {
      rewrite insert using (datetime_of_statement());
    };
    updated: datetime {
      rewrite insert using (datetime_of_statement());
      rewrite update using (datetime_of_statement());
    };
  }

  scalar type IntensityType extending enum<mini, plus, elite>;

  type Habit {
    required habit_name: str;
    required habit_description: str;
    required created_by: User {
      default := global current_user;
    };

    multi link intensities: IntensityDetail;

    created: datetime {
      rewrite insert using (datetime_of_statement());
    };
    updated: datetime {
      rewrite insert using (datetime_of_statement());
      rewrite update using (datetime_of_statement());
    };

    access policy admin_has_full_access
      allow all
      using (global current_user.user_role ?= Role.admin);
    access policy creator_has_full_access
      allow all
      using (.created_by ?= global current_user);
    access policy others_read_only
      allow select, insert;
  }

  type IntensityDetail {
    required intensity_type: IntensityType;
    required habit: Habit;
    required lateral_variations: array<str>;
    required created_by: User {
      default := global current_user;
    };

    created: datetime {
      rewrite insert using (datetime_of_statement());
    };
    updated: datetime {
      rewrite insert using (datetime_of_statement());
      rewrite update using (datetime_of_statement());
    };

    constraint exclusive on (.habit);
    constraint exclusive on (.intensity_type);

    access policy admin_has_full_access
      allow all
      using (global current_user.user_role ?= Role.admin);
    access policy creator_has_full_access
      allow all
      using (.created_by ?= global current_user);
    access policy others_read_only
      allow select, insert;
  }
}

