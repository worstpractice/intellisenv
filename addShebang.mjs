import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { noOp } from './noOp.mjs';
import { readFile, writeFile } from 'fs/promises';

const getProjectRoot = () => {
  return (
    globalThis.__dirname ||
    dirname(
      fileURLToPath(
        // @ts-expect-error import.meta` complaints, not a real concern
        import.meta.url,
      ),
    )
  );
};

const ENCODING = 'utf-8';

/** @type {(filePath: string) => Promise<void>} */
const addShebangTo = async (filePath) => {
  const text = await readFile(filePath, ENCODING);

  console.log(text);

  const newText = [
    '#!/usr/bin/env node',
    text,
  ].join('\n');

  console.log(newText);

  await writeFile(filePath, newText, ENCODING);
};

const path = `${getProjectRoot()}/bin/index.js`;

void addShebangTo(path).catch(noOp);
