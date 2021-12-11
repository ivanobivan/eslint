module.exports = {
    parser: "babel-eslint",
    plugins: [
        "import",
        "prettier",
        "jest",
    ],
    extends: [
        "eslint:recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true
    },
    overrides: [{
        files: ["**/*.ts?(x)"],
        parser: "@typescript-eslint/parser",
        parserOptions: {
            ecmaVersion: 2018,
            sourceType: "module",
            useJSXTextNode: true,
            ecmaFeatures: {
                jsx: true
            },
            warnOnUnsupportedTypeScriptVersion: true
        },
        plugins: ["@typescript-eslint"],
        rules: {
            "import/no-default-export": "off",
            "getter-return": "off",
            "no-dupe-args": "off",
            "no-dupe-keys": "off",
            "no-unreachable": "off",
            "valid-typeof": "off",
            "no-const-assign": "off",
            "no-new-symbol": "off",
            "no-this-before-super": "off",
            "no-redeclare": "off",
            "default-case": "off",
            "no-dupe-class-members": "off",
            "no-undef": "off",
            "no-array-constructor": "off",
            "no-use-before-define": "off",
            "no-unused-vars": "off",
            "no-useless-constructor": "off",
            "@typescript-eslint/no-namespace": "error",
            "@typescript-eslint/no-use-before-define": [
                "warn",
                {
                    functions: false,
                    classes: false,
                    variables: false,
                    typedefs: false
                }
            ],
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    args: "none",
                    ignoreRestSiblings: true
                }
            ],
            "@typescript-eslint/no-useless-constructor": "warn",
            "@typescript-eslint/indent": ["off"],
            "@typescript-eslint/no-object-literal-type-assertion": "off",
            "@typescript-eslint/await-thenable": "error",
            "@typescript-eslint/no-for-in-array": "error",
            "@typescript-eslint/no-misused-promises": "error",
            "@typescript-eslint/no-unnecessary-type-assertion": "error",
            "@typescript-eslint/prefer-includes": "error",
            "@typescript-eslint/prefer-regexp-exec": "error",
            "@typescript-eslint/prefer-string-starts-ends-with": "error",
            "require-await": "off",
            "@typescript-eslint/require-await": "error",
            "@typescript-eslint/unbound-method": "error",
            "@typescript-eslint/adjacent-overload-signatures": "error",
            "@typescript-eslint/ban-ts-ignore": "off",
            "@typescript-eslint/ban-types": "error",
            "@typescript-eslint/consistent-type-assertions": "off",
            "@typescript-eslint/explicit-function-return-type": [
                "warn",
                {
                    allowExpressions: true
                }
            ],
            camelcase: "off",
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "default",
                    format: ["camelCase", "PascalCase"]
                },

                {
                    selector: "variable",
                    format: ["camelCase", "UPPER_CASE", "PascalCase"]
                },
                {
                    selector: "parameter",
                    format: ["camelCase"],
                    leadingUnderscore: "allow"
                },

                {
                    selector: "memberLike",
                    modifiers: ["private"],
                    format: ["camelCase"],
                    leadingUnderscore: "require"
                },
                {
                    selector: "interface",
                    format: ["PascalCase"],
                    custom: {
                        regex: "^I[A-Z]",
                        match: true
                    }
                },
                {
                    selector: "typeLike",
                    format: ["PascalCase"]
                }
            ],
            "@typescript-eslint/member-delimiter-style": "error",
            "@typescript-eslint/no-array-constructor": "error",
            "no-empty-function": "off",
            "@typescript-eslint/no-empty-function": "error",
            "@typescript-eslint/no-empty-interface": "error",
            "@typescript-eslint/no-inferrable-types": "error",
            "@typescript-eslint/no-misused-new": "error",
            "@typescript-eslint/no-non-null-assertion": "warn",
            "@typescript-eslint/no-this-alias": "error",
            "@typescript-eslint/no-var-requires": "error",
            "@typescript-eslint/prefer-namespace-keyword": "error",
            "@typescript-eslint/triple-slash-reference": "error",
            "@typescript-eslint/type-annotation-spacing": "error",
            "no-var": "error",
            "prefer-const": "error",
            "prefer-rest-params": "error",
            "prefer-spread": "error",
            "@typescript-eslint/func-call-spacing": "off",
            "@typescript-eslint/no-extra-parens": "off",
            "@typescript-eslint/semi": "off"
        }
    }],
    rules: {
        "class-methods-use-this": "off",
        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing": ["off", "always"],
        "comma-dangle": "off",
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "no-console": [
            "error",
            {
                allow: ["warn", "info", "error", "groupEnd", "groupCollapsed"]
            }
        ],
        "no-extra-bind": "error",
        "max-len": [
            "error",
            {
                code: 120,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ],
        "prettier/prettier": [
            "error",
            {
                printWidth: 120,
                tabWidth: 4,
                useTabs: false,
                semi: true,
                trailingComma: "all"
            }
        ],
        "import/first": "error",

        "import/newline-after-import": "error",
        "import/no-absolute-path": "error",
        "import/no-amd": "error",
        "import/no-default-export": "error",
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: true,
                peerDependencies: true,
                optionalDependencies: false
            }
        ],
        "import/no-mutable-exports": "error",
        "import/no-named-default": "error",
        "import/no-self-import": "error",
        "import/no-unresolved": "off",


        "eslint-comments/disable-enable-pair": [
            "error",
            {
                allowWholeFile: true
            }
        ],
        "eslint-comments/no-aggregating-enable": "error",
        "eslint-comments/no-duplicate-disable": "error",
        "eslint-comments/no-unlimited-disable": "error",
        "eslint-comments/no-unused-disable": "error",
        "eslint-comments/no-unused-enable": "error",
        "eslint-comments/no-use": [
            "error",
            {
                allow: [
                    "eslint-disable",
                    "eslint-disable-line",
                    "eslint-disable-next-line",
                    "eslint-enable"
                ]
            }
        ],
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-angle-bracket-type-assertion": "off",
        "template-curly-spacing": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        indent: "off",
        "@typescript-eslint/no-explicit-any": "off"
    },

    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".tsx", ".ts"]
            }
        }
    }
};
