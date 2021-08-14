import { not } from './higher-order-functions/not.js';
import { isComment } from './predicates/isComment.js';

export const excludeComments = not(isComment);
