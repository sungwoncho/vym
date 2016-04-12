import {Meteor} from 'meteor/meteor';
import {ServiceConfiguration} from 'meteor/service-configuration';

export function configureGithubOauth() {
  ServiceConfiguration.configurations.upsert(
    { service: 'github' },
    {
      $set: {
        clientId: Meteor.settings.public.githubClientId,
        secret: Meteor.settings.githubClientSecret
      }
    }
  );
}
