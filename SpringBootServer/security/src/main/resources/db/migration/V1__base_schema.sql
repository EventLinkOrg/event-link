CREATE SCHEMA jwt;

CREATE TABLE IF NOT EXISTS jwt.confirmation_tokens
(
    id uuid NOT NULL,
    confirmed_at timestamp(6) without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    expires_at timestamp(6) without time zone NOT NULL,
    token character varying(255) COLLATE pg_catalog."default" NOT NULL,
    app_user_id uuid NOT NULL,
    CONSTRAINT confirmation_tokens_pkey PRIMARY KEY (id),
    CONSTRAINT fki5j0v7b480rdn3v1g795cmwlb FOREIGN KEY (app_user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE IF NOT EXISTS jwt.roles
(
    id uuid NOT NULL,
    name character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT roles_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS jwt.users
(
    id uuid NOT NULL,
    email character varying(255) COLLATE pg_catalog."default",
    enabled boolean,
    firstname character varying(255) COLLATE pg_catalog."default",
    lastname character varying(255) COLLATE pg_catalog."default",
    locked boolean,
    password character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS jwt.users_roles
(
    app_user_id uuid NOT NULL,
    roles_id uuid NOT NULL,
    CONSTRAINT fka62j07k5mhgifpp955h37ponj FOREIGN KEY (roles_id)
        REFERENCES public.roles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkar2y0lww0xn3x3aoqfg9qsgr5 FOREIGN KEY (app_user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)