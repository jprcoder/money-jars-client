import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';

global.fetch = require('jest-fetch-mock');

Enzyme.configure({adapter: new Adapter()});