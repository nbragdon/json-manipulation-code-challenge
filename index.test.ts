import manipulateJson from "."

test('basic', () => {
    const sampleInput = {
        hello: 'world',
        foo: 5
    };

    const expectedOutput = {
        hello: 'world BB2',
        foo: 8
    };
    
    const output = manipulateJson(sampleInput);

    expect(output).toEqual(expectedOutput);
    expect(sampleInput).not.toEqual(expectedOutput);
});

test('number testing', () => {
    const sampleInput = {
        hello: 'world',
        foo: -1
    };

    const expectedOutput = {
        hello: 'world BB2',
        foo: -4
    };
    
    const output = manipulateJson(sampleInput);

    expect(output).toEqual(expectedOutput);
    expect(sampleInput).not.toEqual(expectedOutput);
});

test('string testing', () => {
    const sampleInput = {
        hello: 'world is here ',
        foo: 1
    };

    const expectedOutput = {
        hello: 'world is here BB2',
        foo: 0
    };
    
    const output = manipulateJson(sampleInput);

    expect(output).toEqual(expectedOutput);
    expect(sampleInput).not.toEqual(expectedOutput);
});

test('newline testing', () => {
    const sampleInput = {
        hello: 'world\n',
        foo: 1
    };

    const expectedOutput = {
        hello: 'world\nBB2',
        foo: 0
    };
    
    const output = manipulateJson(sampleInput);

    expect(output).toEqual(expectedOutput);
    expect(sampleInput).not.toEqual(expectedOutput);
});

test('nested testing', () => {
    const sampleInput = {
        nested: {
            nestedAgain: {
                oneMoreNest: {
                    hello: 'world',
                    foo: 5
                }
            }
        }
    };

    const expectedOutput = {
        nested: {
            nestedAgain: {
                oneMoreNest: {
                    hello: 'world BB2',
                    foo: 8
                }
            }
        }
    };
    
    const output = manipulateJson(sampleInput);

    expect(output).toEqual(expectedOutput);
    expect(sampleInput).not.toEqual(expectedOutput);
});

test('complex nested array testing', () => {
    const sampleInput = {
        arrayItems: [2, 4, 'foo', 6],
        nested: {
            nestedArray: ['ship', 17, {
                moreNestedArray: [4, 'world', ' example ', 12]
            }]
        }
    };

    const expectedOutput = {
        arrayItems: [2, 6, 'foo BB2', 10],
        nested: {
            nestedArray: ['ship BB2', 32, {
                moreNestedArray: [6, 'world BB2', ' example BB2', 22]
            }]
        }
    };
    
    const output = manipulateJson(sampleInput);

    expect(output).toEqual(expectedOutput);
    expect(sampleInput).not.toEqual(expectedOutput);
});

test('alternate field types', () => {
    const sampleInput = {
        hello: 'world',
        foo: 5,
        booleanField: true
    };

    const expectedOutput = {
        hello: 'world BB2',
        foo: 8,
        booleanField: true
    };
    
    const output = manipulateJson(sampleInput);

    expect(output).toEqual(expectedOutput);
    expect(sampleInput).not.toEqual(expectedOutput);
});