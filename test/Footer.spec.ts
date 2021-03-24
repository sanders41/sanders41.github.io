import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Footer);
    expect(wrapper.vm).toBeTruthy();
  });

  test('links present', () => {
    const wrapper = mount(Footer);

    expect(wrapper.html()).toContain('icon="fab,twitter"');
    expect(wrapper.html()).toContain('href="https://twitter.com/paul41"');
    expect(wrapper.html()).toContain('icon="fab,linkedin"');
    expect(wrapper.html()).toContain('href="https://www.linkedin.com/in/paul-sanders-1367047/"');
    expect(wrapper.html()).toContain('icon="fab,github"');
    expect(wrapper.html()).toContain('href="https://github.com/sanders41"');
  });

  test('copyrite present', () => {
    const wrapper = mount(Footer);
    const currentYear = new Date().getFullYear();

    if (currentYear === 2021) {
      expect(wrapper.html()).toContain('© 2021 Paul Sanders');
    } else {
      expect(wrapper.html()).toContain(`© 2021 - ${currentYear} Paul Sanders`);
    }
  });
});
