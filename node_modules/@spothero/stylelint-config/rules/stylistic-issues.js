module.exports = {
    rules: {
        // color
        'color-hex-case': 'lower',
        'color-hex-length': 'long',
        // font family
        'font-family-name-quotes': 'always-where-recommended',
        // font weight
        'font-weight-notation': 'numeric',
        // function
        'function-comma-newline-after': 'never-multi-line',
        'function-comma-newline-before': 'never-multi-line',
        'function-comma-space-after': 'always',
        'function-comma-space-before': 'never',
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': null,
        'function-parentheses-space-inside': 'never',
        'function-url-quotes': 'always',
        'function-whitespace-after': 'always',
        // number
        'number-leading-zero': 'always',
        'number-no-trailing-zeros': true,
        // string
        'string-quotes': 'double',
        // length
        'length-zero-no-unit': true,
        // unit
        'unit-case': 'lower',
        // value
        'value-keyword-case': 'lower',
        // value list
        'value-list-comma-newline-after': 'never-multi-line',
        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-after': 'always',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,
        // custom property
        'custom-property-empty-line-before': 'never',
        // property
        'property-case': 'lower',
        // declaration
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-newline-after': null,
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        'declaration-empty-line-before': 'never',
        // declaration block
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-trailing-semicolon': 'always',
        // block
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': ['always', {
            ignoreAtRules: ['if', 'else']
        }],
        'block-closing-brace-newline-before': 'always',
        'block-closing-brace-space-after': 'always-single-line',
        'block-closing-brace-space-before': 'always-single-line',
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-newline-before': null,
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',
        // selector
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-type-case': 'lower',
        // selector list
        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-after': 'always-single-line',
        'selector-list-comma-space-before': 'never-single-line',
        // rule
        'rule-empty-line-before': ['always', {
            ignore: ['after-comment', 'inside-block'],
            except: ['after-single-line-comment']
        }],
        // media feature
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        // media query list
        'media-query-list-comma-newline-after': null,
        'media-query-list-comma-newline-before': null,
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never-single-line',
        // at-rule
        'at-rule-empty-line-before': ['always', {
            except: ['blockless-after-blockless', 'first-nested'],
            ignore: ['after-comment'],
            ignoreAtRules: ['if', 'else']
        }],
        'at-rule-name-case': 'lower',
        'at-rule-name-newline-after': null,
        'at-rule-name-space-after': 'always-single-line',
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-semicolon-space-before': 'never',
        // comment
        'comment-empty-line-before': null,
        'comment-whitespace-inside': 'always',
        // general/sheet
        'indentation': 4,
        'linebreaks': 'unix',
        'max-empty-lines': 1,
        'max-line-length': null,
        'no-eol-whitespace': true,
        'no-missing-end-of-source-newline': true,
        'no-empty-first-line': true
    }
};
