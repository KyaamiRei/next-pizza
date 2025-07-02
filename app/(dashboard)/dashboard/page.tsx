import * as React from 'react';

interface IDashboardProps {
  className: string;
}

const Dashboard: React.FunctionComponent<IDashboardProps> = ({ className }) => {
  return <div className={className}> Dashboard </div>;
};

export default Dashboard;
