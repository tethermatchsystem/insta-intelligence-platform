CREATE EXTENSION IF NOT EXISTS citext;
CREATE TABLE IF NOT EXISTS users (id BIGSERIAL PRIMARY KEY, email CITEXT NOT NULL UNIQUE, full_name TEXT, created_at TIMESTAMPTZ NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS tenant_memberships (tenant_id BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE, role_code TEXT NOT NULL CHECK (role_code IN ('owner','admin','analyst','viewer')), created_at TIMESTAMPTZ NOT NULL DEFAULT now(), PRIMARY KEY (tenant_id, user_id));
