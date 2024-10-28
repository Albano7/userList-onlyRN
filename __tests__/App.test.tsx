import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '@app/store';
import MyApp from '@app/MyApp';
import { getApiUsersList } from '@app/commands';
import Colors from '@app/styles/colors';
import Theme from '@app/styles';
import * as Redux from 'react-redux';

// TODO SOLVE ERROR UNIT TEST

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

describe('MyApp', () => {
  beforeEach(() => {
      jest.spyOn(Redux, 'useSelector').mockReturnValue({
          users: {}
      });
  });
  it('should render the component correctly', () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <MyApp testID="my-app" />
      </Provider>
    );

    const myAppContainer = getByTestId('my-app');
    expect(myAppContainer).toBeDefined();

    const headerTitle = getByText('Listado de usuarios');
    expect(headerTitle).toBeDefined();

    const flatList = getByTestId('flat-list');
    expect(flatList).toBeDefined();

    const refreshControl = getByTestId('refresh-control');
    expect(refreshControl).toBeDefined();
    expect(refreshControl.props.refreshing).toBe(false);
  });

  it('should show the error message when there is an error', () => {
    (getApiUsersList as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    const { getByText } = render(
      <Provider store={store}>
        <MyApp testID="my-app" />
      </Provider>
    );

    const errorMessage = getByText('Ups! hay un error, vuelva a intentarlo');
    expect(errorMessage).toBeDefined();
  });

  it('should show the loading indicator when fetching data', async () => {
    (getApiUsersList as jest.Mock).mockImplementation(() => new Promise((resolve) => setTimeout(resolve, 1000)));

    const { getByTestId } = render(
      <Provider store={store}>
        <MyApp testID="my-app" />
      </Provider>
    );

    const loadingIndicator = getByTestId('loading-indicator');
    expect(loadingIndicator).toBeDefined();
    expect(loadingIndicator.props.size).toBe('large');
    expect(loadingIndicator.props.color).toBe(Colors.bg);
  });

  it('should handle the pull-to-refresh functionality', async () => {
    (getApiUsersList as jest.Mock).mockImplementation(() => new Promise((resolve) => setTimeout(resolve, 1000)));

    const { getByTestId } = render(
      <Provider store={store}>
        <MyApp testID="my-app" />
      </Provider>
    );

    const refreshControl = getByTestId('refresh-control');
    expect(refreshControl.props.refreshing).toBe(false);

    fireEvent(refreshControl, 'onRefresh');
    expect(refreshControl.props.refreshing).toBe(true);

    await waitFor(() => expect(refreshControl.props.refreshing).toBe(false));
  });

  it('should render the MyAppItem component for each user', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <MyApp testID="my-app" />
      </Provider>
    );

    const myAppItems = getAllByTestId('my-app-item');
    expect(myAppItems.length).toBeGreaterThan(0);
    myAppItems.forEach((item) => {
      expect(item).toBeDefined();
    });
  });

  it('should have the correct styles', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MyApp testID="my-app" />
      </Provider>
    );

    const myAppContainer = getByTestId('my-app');
    expect(myAppContainer.props.style).toEqual(Theme.MyApp.container);

    const headerContainer = getByTestId('header-container');
    expect(headerContainer.props.style).toEqual(Theme.MyApp.headerContainer);

    const headerTitle = getByTestId('header-title');
    expect(headerTitle.props.style).toEqual(Theme.MyApp.headerTitle);

    const contentContainer = getByTestId('content-container');
    expect(contentContainer.props.style).toEqual(Theme.MyApp.contentContainer);

    const list = getByTestId('flat-list');
    expect(list.props.style).toEqual(Theme.MyApp.list);

    const listSeparator = getByTestId('list-separator');
    expect(listSeparator.props.style).toEqual(Theme.MyApp.listSeparator);

    const errorText = getByTestId('error-text');
    expect(errorText.props.style).toEqual(Theme.MyApp.errorText);
  });
});