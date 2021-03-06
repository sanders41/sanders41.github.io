/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils';
import ProjectFooter from '@/components/ProjectFooter.vue';

describe('ProjectFooter', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ProjectFooter, { stubs: ['font-awesome-icon'] });
    expect(wrapper.vm).toBeTruthy();
  });

  test('footer class', () => {
    const wrapper = mount(ProjectFooter, { stubs: ['font-awesome-icon'] });
    expect(wrapper.find('footer.footer').exists()).toBeTruthy();
  });

  test('links present', () => {
    const wrapper = mount(ProjectFooter, { stubs: ['font-awesome-icon'] });

    expect(wrapper.html()).toContain('icon="fab,twitter"');
    expect(wrapper.html()).toContain('href="https://twitter.com/paul41"');
    expect(wrapper.html()).toContain('icon="fab,linkedin"');
    expect(wrapper.html()).toContain('href="https://www.linkedin.com/in/paul-sanders-1367047/"');
    expect(wrapper.html()).toContain('icon="fab,github"');
    expect(wrapper.html()).toContain('href="https://github.com/sanders41"');
  });

  test('copyrite present', () => {
    const wrapper = mount(ProjectFooter, { stubs: ['font-awesome-icon'] });
    const currentYear = new Date().getFullYear();
    const copyrite = wrapper.find('div#copyrite');

    if (currentYear === 2021) {
      expect(copyrite.text()).toContain('© 2021 Paul Sanders');
    } else {
      expect(copyrite.text()).toContain(`© 2021 - ${currentYear} Paul Sanders`);
    }
  });
});
