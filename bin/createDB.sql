CREATE TABLE IF NOT EXISTS USERS (
    user_id SERIAL UNIQUE,
    user_name VARCHAR(100) UNIQUE,
    user_mail VARCHAR(100),
    user_password VARCHAR(100),
    user_ponits INT,
    user_access INT,
    PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS RUN (
    run_code SERIAL UNIQUE,
    run_time TIME,
    /*#foreign keys*/
    run_category_code INT,
    platform_code INT,
    user_id INT,
    PRIMARY KEY (run_code)
);

CREATE TABLE IF NOT EXISTS GAME (
    game_code SERIAL UNIQUE,
    game_libelle VARCHAR(100),
    game_image VARCHAR(100),
    /*#foreign keys*/
    game_type_code INT,
    PRIMARY KEY (game_code)
);

CREATE TABLE IF NOt EXISTS RUN_CATEGORY (
    run_category_code SERIAL UNIQUE,
    run_category_libelle VARCHAR(100),
    PRIMARY KEY (run_category_code)
);

CREATE TABLE IF NOT EXISTS GAME_TYPE (
    game_type_code SERIAL UNIQUE,
    game_type_libelle VARCHAR(100),
    /*#foreign keys*/
    game_code INT,
    PRIMARY KEY (game_type_code)
);


CREATE TABLE IF NOT EXISTS PLATFORM (
    platform_code SERIAL UNIQUE,
    platform_libelle VARCHAR(100),
    PRIMARY KEY (platform_code)
);

CREATE TABLE IF NOT EXISTS SUGGESTION (
    suggestion_code SERIAL UNIQUE,
    suggestion_contents VARCHAR(500),
    suggestion_points INT,
    /*#foreign keys*/
    user_id INT,
    PRIMARY KEY (suggestion_code)
);

CREATE TABLE IF NOT EXISTS CONTAINS_RUN (
    run_category_code INT,
    game_code INT,
    PRIMARY KEY (run_category_code, game_code)
);


ALTER TABLE RUN ADD FOREIGN KEY (run_category_code) REFERENCES RUN_CATEGORY (run_category_code);
ALTER TABLE RUN ADD FOREIGN KEY (platform_code) REFERENCES PLATFORM (platform_code);
ALTER TABLE RUN ADD FOREIGN KEY (user_id) REFERENCES USERS (user_id);
ALTER TABLE GAME ADD FOREIGN KEY (game_type_code) REFERENCES GAME_TYPE (game_type_code);
ALTER TABLE GAME_TYPE ADD FOREIGN KEY (game_code) REFERENCES GAME (game_code);
ALTER TABLE SUGGESTION ADD FOREIGN KEY (user_id) REFERENCES USERS (user_id);
ALTER TABLE CONTAINS_RUN ADD FOREIGN KEY (game_code) REFERENCES GAME (game_code);
ALTER TABLE CONTAINS_RUN ADD FOREIGN KEY (run_category_code) REFERENCES RUN_CATEGORY (run_category_code);