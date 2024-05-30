const core = require("@actions/core");
const { PubSub } = required("@google-cloud/pubsub");

(async () => {
  try {
    const projectId = core.getInput("project-id");
    const topic = core.getInput("pubsub-topic");
    const messageBody = core.getInput("message-body");

    const pubSubClient = new PubSub({ projectId });

    const messageId = await pubSubClient
      .topic(topic)
      .publishMessage({ json: JSON.parse(messageBody) });
    core.setOutput("message-id", messageId);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
