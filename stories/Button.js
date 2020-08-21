import React from 'react';
import { Button } from 'antd';

import './styles/index.less';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Example = () => <Button type="primary">test</Button>;
