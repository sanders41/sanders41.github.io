/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils';
import MyProjects from '@/components/MyProjects.vue';

describe('MyProjects', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MyProjects);
    expect(wrapper.vm).toBeTruthy();
  });

  test('links present', () => {
    const wrapper = mount(MyProjects);

    expect(wrapper.html()).toContain(
      'href="https://github.com/sanders41/meilisearch-python-async"',
    );
    expect(wrapper.html()).toContain('href="https://github.com/sanders41/meilisearch-fastapi"');
    expect(wrapper.html()).toContain('href="https://github.com/sanders41/meilisearch-cli"');
    expect(wrapper.html()).toContain('href="https://github.com/sanders41/weather-command"');
    expect(wrapper.html()).toContain('href="https://github.com/sanders41/camel-converter"');
    expect(wrapper.html()).toContain('href="https://github.com/sanders41/sas7bdat-converter"');
  });
});
