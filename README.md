# test-github-actions

- [Environment variables](./.github/workflows/01-environment_variables.yml) setup env variable to any job
- [Environment variables for job](./.github/workflows/02-environment_variables_for_job.yml) setup env variable to specific job
- [Environment variables for step](./.github/workflows/03-environment_variables_for_job.yml) setup env variable to specific step
- [Github secrets](./.github/workflows/04-github_secrets.yml) use secrets env provide by github ("Settings" -> "Secrets" -> "Actions")
- [Default github environment variables](./.github/workflows/05-default_github_env_variables.yml) use default github environment variables provide by github (like `GITHUB_JOB`, `GITHUB_ACTION`, `GITHUB_ACTION_PATH`, `GITHUB_ACTOR`, `GITHUB_RUN_ID`)
- [](./.github/workflows/06)
- [Continuous delivery](./.github/workflows/07-deploy_env.yml)
- [Caching dependencies](./.github/workflows/08-caching-dependencies.yml) make workflows faster & more efficient
- [Dump action log](./.github/workflows/09-dump_action_logs.yml) is utils for debugging without tools like `tmate`
- [](./.github/workflows/0)
- [](./.github/workflows/0)

# Tips :

- By default all run in parallel at the same time.
- If one jobs fails, all dependent jobs are skipped
  - If conditional statement can force job to continue
- When a workflow job references an environment, the job won't start until all of the environment's protection rules pass
- A job also cannot access secrets that are defined in an environment until all the environment protection rules pass.

# Secrets :

Multiple level for secrets :

- Organization-level is the top of all, defined in one place for all repository
- Repository Environment, can add reviewers to control access to the secrets

# Jobs :

Once an event is triggered, the series of steps carried out for that workflow is a step. A job could list a series of steps that run parallel to each other, also they could be configured to run in sequential order.

# Actions

An action is an element of a step and is basically a command. It is an action that gets executed on the runner, and as such, is the heart of Github Actions. We can have our own custom action such as npm install or leverage on existing actions created by the community such as the checkout action.

# Steps

These are the single elements that make up a job. A step groups the actions that are carried out on a runner.
