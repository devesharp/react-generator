import getopts from 'getopts';
import { ComponentGenerator } from './components';

declare const process: any;

const options = getopts(process.argv.slice(2), {
    alias: {
        output: ['o', 'f'],
        type: 't',
    },
});

if (options._[0] === 'make:components') {
    const name: any = options._[1].split('/').splice(-1).join('');
    const path: any = options._[1].split('/').slice(0, -1).join('/');

    ComponentGenerator({
        name,
        path,
        options,
    });
}
