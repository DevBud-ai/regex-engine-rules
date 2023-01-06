export const data = {
    python: [
        {
            ID: 'PYR_003',
            method: 'regex',
            pattern: 'class [a-z]',
            message: 'Class names should start with a capital letter',
            severity: 'Warning',
            additional_info: ['messag1', 'examples?'],
            source: 'Custom',
        },
        {
            ID: 'PYR_001',
            method: 'regex',
            pattern: '12345',
            message: 'Import statements should be at the top of the file',
            severity: 'Warning',
            additional_info: ['messag1', 'examples?'],
            source: 'Custom',
        },

        {
            ID: 'PYP_002',
            method: 'code',
            func_name: 'function_name',
            func_uri: 'src/filename.ts??',
            message: 'Class name should be in unique',
            severity: 'warnng',
            additional_info: ['messag1', 'examples?'],
            source: 'DevBud',
        },
        {
            ID: 'PYR_004',
            method: 'regex',
            pattern: '/exec\s+/',
            message: 'Use of the exec statement could be dangerous, and should be avoided. Moreover, the exec statement was removed in Python 3.0. Instead, the built-in exec() function can be used.',
            severity: 'Warning',
            additional_info: ['messag1', 'examples?'],
            source: 'DevBud',
        },
    ],
};
