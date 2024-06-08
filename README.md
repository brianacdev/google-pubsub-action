# google-pubsub-action

# MarketDial Queue GCP PubSub Message from Github Actions

This action publishes a message to a GCP PubSub topic.

## Inputs

### `project-id`

**Required** The GCP Project ID of the PubSub Topic.

### `pubsub-topic`

**Required** The Google Cloud PubSub Topic to publish the message to.

### `message-body`

**Required** The message body of the PubSub message.

## Outputs

### `message-id`

The ID of the message that was published.

## Example usage

`need to set up gcloud with google-github-actions first`

```yaml

steps:
  - name: Checkout
    uses: actions/checkout@v4

  - id: 'auth'
    name: 'Google Cloud Auth'
    uses: google-github-actions/auth@v2
    with:
      credentials_json: '${{ secrets.GCP_CREDENTIALS }}'
      token_format: 'access_token'

  - name: 'Publishing Build Started for ${{ github.ref_name }} by ${{ github.triggering_actor }}'
    uses: briancolemannet/google-pubsub-action@v2
    with:
      project-id: md-build
      pubsub-topic: ftr-env-manager
      message-body: '{"job": "build_started", "params": {"branch": "${{ github.ref_name }}", "pusher": "${{ github.triggering_actor }}" }}'

```

