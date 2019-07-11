module.exports = {
    rules: {
        // color
        'color-named': 'never',
        'color-no-hex': null,
        // function
        'function-blacklist': null,
        'function-url-no-scheme-relative': true,
        'function-url-scheme-blacklist': null,
        'function-url-scheme-whitelist': null,
        'function-whitelist': null,
        // keyframes
        'keyframes-name-pattern': null,
        // number
        'number-max-precision': 5,
        // time
        'time-min-milliseconds': 100,
        // unit
        'unit-blacklist': null,
        'unit-whitelist': null,
        // shorthand property
        'shorthand-property-no-redundant-values': true,
        // value
        'value-no-vendor-prefix': true,
        // custom property
        'custom-property-pattern': null,
        // property
        'property-blacklist': null,
        'property-no-vendor-prefix': true,
        'property-whitelist': null,
        // declaration
        'declaration-no-important': true,
        'declaration-property-unit-blacklist': null,
        'declaration-property-unit-whitelist': null,
        'declaration-property-value-blacklist': null,
        'declaration-property-value-whitelist': null,
        // declaration block
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-single-line-max-declarations': 1,
        // selector
        'selector-attribute-operator-blacklist': null,
        'selector-attribute-operator-whitelist': null,
        'selector-class-pattern': null,
        'selector-combinator-blacklist': null,
        'selector-combinator-whitelist': null,
        'selector-id-pattern': null,
        'selector-max-attribute': null,
        'selector-max-class': null,
        'selector-max-combinators': null,
        'selector-max-compound-selectors': 8,
        'selector-max-empty-lines': 0,
        'selector-max-id': 0,
        'selector-max-pseudo-class': null,
        'selector-max-specificity': '0,6,1',
        'selector-max-type': null,
        'selector-max-universal': 2,
        'selector-nested-pattern': null,
        'selector-no-qualifying-type': null,
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-blacklist': null,
        'selector-pseudo-class-whitelist': null,
        'selector-pseudo-element-blacklist': null,
        'selector-pseudo-element-whitelist': null,
        // media feature
        'media-feature-name-blacklist': [
            'min-width',
            'max-width'
        ],
        'media-feature-name-no-vendor-prefix': null,
        'media-feature-name-value-whitelist': null,
        'media-feature-name-whitelist': null,
        // custom media
        'custom-media-pattern': null,
        // at-rule
        'at-rule-blacklist': null,
        'at-rule-no-vendor-prefix': null,
        'at-rule-whitelist': null,
        // comment
        'comment-word-blacklist': null,
        // general/sheet
        'max-nesting-depth': 8,
        'no-unknown-animations': true
    }
};
