module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@ionic'],
    extends: ['plugin:@ionic/recommended'], // or use `plugin:@ionic/strict`
    rules:{
        "linebreak-style": 0
    },
    globals: {
        React: true,
        google: true,
        mount: true,
        mountWithRouter: true,
        shallow: true,
        shallowWithRouter: true,
        context: true,
        expect: true,
        jsdom: true,
        JSX: true,
    }

};
