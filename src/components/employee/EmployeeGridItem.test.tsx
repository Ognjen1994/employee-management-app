import React from 'react';
import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import EmployeeGridItem from './EmployeeGridItem';

describe('ErrorMessage Component', () => {
  it('renders with the correct props', () => {
    const testName = 'name';
    const testLabel = 'test name';

    const { container } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <EmployeeGridItem name={testName} label={testLabel} />
        </Form>
      </Formik>,
    );

    const span = container.querySelector('form span');

    expect(span).toHaveTextContent(testLabel);
  });
});
