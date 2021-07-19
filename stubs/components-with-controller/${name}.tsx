import React, { useEffect, useRef, useState } from 'react';
import * as S from './${name}.style';
import { I${name} } from './${name}.interface';
import { ${name}Controller } from './${name}.controller';

export const ${name} = function ${name}({}: I${name}): ReactElement {
    const ctrl = ${name}Controller();

    return (
        <S.Container>
        </S.Container>
    );
}
