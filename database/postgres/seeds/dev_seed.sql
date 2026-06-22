INSERT INTO tenants (slug, name, plan_code) VALUES ('acme-agency', 'ACME Agency', 'prototype') ON CONFLICT DO NOTHING;
