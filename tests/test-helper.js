import Application from 'ember-multi-tabs-experiment/app';
import config from 'ember-multi-tabs-experiment/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
