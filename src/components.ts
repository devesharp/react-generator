import * as fs from 'fs';
import * as path from 'path';
import mkdirp from 'mkdirp';
import { logger, instructions, sticker, tasks, table } from '@poppinss/cliui';
import { IOptions } from './interfaces';

function writeFile(name: string, pathName: string, outdir: string) {
    let file = fs.readFileSync(pathName).toString();
    file = file.replace(/\${name}/g, name);
    const fileName = pathName.split('/').splice(-1).join('');
    const newFileName = fileName.replace(/\${name}/g, name);

    if (fs.existsSync(path.resolve(outdir, newFileName))) {
        logger.action('ERROR').failed(`${outdir}/${newFileName}`, 'File exist');
    } else {
        logger.action('create').succeeded(`${outdir}/${newFileName}`);
        fs.writeFileSync(path.resolve(outdir, newFileName), file);
    }
}

export function ComponentGenerator({ path: pathName, options, name }: IOptions) {
    mkdirp.sync(pathName);

    writeFile(name, path.resolve(__dirname, '..', 'stubs', 'components', 'index.ts'), pathName);
    writeFile(name, path.resolve(__dirname, '..', 'stubs', 'components', '${name}.style.ts'), pathName);

    if (options.c) {
        writeFile(name, path.resolve(__dirname, '..', 'stubs', 'components-with-controller', '${name}.tsx'), pathName);
        writeFile(
            name,
            path.resolve(__dirname, '..', 'stubs', 'components-with-controller', '${name}.interface.ts'),
            pathName,
        );
        writeFile(
            name,
            path.resolve(__dirname, '..', 'stubs', 'components-with-controller', '${name}.controller.tsx'),
            pathName,
        );
    } else {
        writeFile(name, path.resolve(__dirname, '..', 'stubs', 'components', '${name}.tsx'), pathName);
        writeFile(name, path.resolve(__dirname, '..', 'stubs', 'components', '${name}.interface.ts'), pathName);
    }

    if (options.s) {
        writeFile(name, path.resolve(__dirname, '..', 'stubs', 'components', '${name}.stories.tsx'), pathName);
    }
}
