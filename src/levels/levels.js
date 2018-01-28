import MirrorMaze from './mirror-maze';
import Slit from './slit';
import Precision from './precision';
import PrismLevel from './prism-level';

const Levels = {
    'Mirror Maze': MirrorMaze,
    'Precision': Precision,
    'Slit': Slit,
    'Prism': PrismLevel,
}

export const LevelMap = [
    'Mirror Maze',
    'Precision',
    'Slit',
    'Prism',
];

export default Levels;
