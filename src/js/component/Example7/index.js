import Template from '@/component/Template';
import StandardVue from './StandardVue.vue';
import JSXComponent from './JSXComponent.vue';

export default {
  functional: true,
  render() {
    return (
      <Template
        standard={require('!raw-loader!docs-loader!./StandardVue.vue')}
        jsx={require('!raw-loader!docs-loader!./JSXComponent.vue')}>
        <div slot="title">
          <h1>07 scoped</h1>
          <p>vue template scope 都是指向 this</p>
          <p>jsx 則要加寫 this</p>
        </div>
        <StandardVue slot="standard" />
        <JSXComponent slot="jsx" />
      </Template>
    );
  },
};

