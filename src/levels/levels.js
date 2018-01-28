import MirrorMaze from './mirror-maze';
import Slit from './slit';
import Precision from './precision';
import PrismLevel from './prism-level';
import BigBlockers from './big-blockers';

const Levels = {
    'Mirror Maze': MirrorMaze,
    'Precision': Precision,
    'Slit': Slit,
    'Prism': PrismLevel,
    'Big Blockers': BigBlockers,
}

export const LevelMap = [
    'Mirror Maze',
    'Precision',
    'Slit',
    'Prism',
    'Big Blockers',
];

export default Levels;
