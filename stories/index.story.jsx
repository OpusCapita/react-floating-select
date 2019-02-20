import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object, number, boolean, array } from '@storybook/addon-knobs';
// Application imports
import { FloatingSelect } from '../src/index';
import AppWrapper from './hocComponents/app-wrapper.component';
import StoryWrapper from './hocComponents/story-wrapper.component';
import { select } from '@storybook/addon-knobs/dist/vue';

const stories = storiesOf('@opuscapita/react-floating-select', module);

// FloatingSelectStory
stories.add('FloatingSelect', () => {
  const DEFAULT_SELECT_OPTIONS = [
    { value: '1', label: 'SelectOption 1' },
    { value: '2', label: 'SelectOption 2' },
    { value: '3', label: 'SelectOption 3' },
    { value: '4', label: 'SelectOption 4' },
    { value: '5', label: 'SelectOption 5' },
    { value: '6', label: 'SelectOption 6' },
    { value: '7', label: 'SelectOption 7' },
    { value: '8', label: 'SelectOption 8' },
    { value: '9', label: 'SelectOption 9' },
    { value: '10', label: 'SelectOption 10' },
    { value: '11', label: 'SelectOption 11' },
  ];
  class StoryComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        selectedOption: null,
      };
    }
    onChange = selectedOption => this.setState({ selectedOption });
    render() {
      const fsProps = {
        ...this.props,
        onChange: this.onChange,
        value: this.state.selectedOption,
      };
      return <FloatingSelect {...fsProps} />;
    }
  }
  /* eslint-disable key-spacing */
  const fsKnobs = {
    controlHeight:          text('Control height', '30px'),
    // Data props
    options:                object('Select options', DEFAULT_SELECT_OPTIONS, 'Data'),
    // Select props
    autoFocus:              boolean('Auto focus', false, 'Select props'),
    backspaceRemovesValue:  boolean('Backspace removes value', true, 'Select props'),
    blurInputOnSelect:      boolean('Remove focus when option selected', false, 'Select props'),
    closeMenuOnSelect:      boolean('Close menu on select', true, 'Select props'),
    inputId:                text('Id of the search input', 'floating-select-example', 'Select props'),
    isLoading:              boolean('Is loading', false, 'Select props'),
    isClearable:            boolean('Is clearable', true, 'Select props'),
    isMulti:                boolean('Multiselect enabled', false, 'Select props'),
    isOptionsDisabled:      boolean('Is options disabled', false, 'Select props'),
    isRtl:                  boolean('Is the select direction right-to-left', false, 'Select props'),
    isSearchable:           boolean('Enable search functionality', false, 'Select props'),
    minMenuHeight:          number('Min height of menu before flipping', 140, 'Select props'),
    maxMenuHeight:          number('Max height of menu before scrolling', 300, 'Select props'),
    menuPlacement:          select('Menu placement', ['auto', 'bottom', 'top'], 'auto', 'Select props'),
    menuPosition:           select('Menu position', ['absolute', 'fixed'], 'absolute', 'Select props'),
    menuShouldBlockScroll:  boolean('Block scroll events when the menu is open', false, 'Select props'),
    name:                   text('Name', 'floating-select-name', 'Select props'),
    openMenuOnFocus:        boolean('Open menu when focused', false, 'Select props'),
    openMenuOnClick:        boolean('Open menu when clicked', true, 'Select props'),
    placeholder:            text('Placeholder text for select value', 'Select...', 'Select props'),
    tabSelectsValue:        boolean('Tab selects value when menu is open', true, 'Select props'),
  };
  const Wrapper = StoryWrapper(StoryComponent, fsKnobs);

  return (
    <AppWrapper maxWidth="400px">
      <Wrapper />
    </AppWrapper>
  );
});
