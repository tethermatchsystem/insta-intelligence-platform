mod bootstrap;
mod errors;
mod handlers;
mod health;
mod routes;
mod state;
#[tokio::main]
async fn main() -> anyhow::Result<()> { bootstrap::run().await }
