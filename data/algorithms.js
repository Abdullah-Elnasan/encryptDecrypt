export default [
    {
        name: 'Caesar Cipher',
        slug: 'caesar',
        description: 'تشفير النصوص بإزاحة كل حرف بعدد معين من الخانات في الأبجدية.'
    },
    {
        name: 'vigenere Cipher',
        slug: 'vigenere',
        description: 'يستخدم لتحويل كل حرف إلى حرف آخر بناءً على معادلة رياضية.'
    },
    {
        name: 'ROT13',
        slug: 'rot13',
        description: 'تغيّر كل حرف في النص اللاتيني إلى الحرف الذي يليه بـ 13 خانة في الأبجدية الإنجليزية.'
    },
    {
        name: 'AutoKey Cipher',
        slug: 'auto-key',
        description: 'يعتمد على دمج كلمة السر مع النص الأصلي لصنع مفتاح طويل ومتنوع.'
    },
    {
        name: 'Keyless Transpo-- Cipher',
        slug: 'keyless',
        description: 'لا يعتمد على مفتاح معين — بل يتبع نمطًا بسيطًا لإعادة ترتيب الحروف.'
    },
    {
        name: 'Keyed Transpo-- Cipher',
        slug: 'keyed',
        description: 'تشفير تبديل الأحرف بناءً على ترتيب حروف كلمة سر (مفتاح).'
    },
    {
        name: 'Column Transpo-- Cipher',
        slug: 'column',
        description: 'إعادة ترتيب الحروف داخل جدول باستخدام مفتاح، وقراءة الناتج عموديًا.'
    },
    {
        name: 'Rail Fence Cipher',
        slug: 'rail-fence',
        description: 'يعتمد على كتابة الحروف في شكل متعرّج (زيك زاك)، ثم تُقرأ سطرًا بسطر لإنتاج النص المشفّر.'
    }
]
