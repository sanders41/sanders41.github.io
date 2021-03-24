import { mount } from '@vue/test-utils';
import Projects from '@/components/Projects.vue';

describe('Projects', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Projects);
    expect(wrapper.vm).toBeTruthy();
  });

  test('links present', () => {
    const wrapper = mount(Projects);

    expect(wrapper.html()).toContain('href="https://github.com/sanders41/async-search-client"');
    expect(wrapper.html()).toContain('href="https://github.com/sanders41/sas7bdat-converter"');
    expect(wrapper.html()).toContain('href="https://github.com/sanders41/split-schedule"');
  });
});
