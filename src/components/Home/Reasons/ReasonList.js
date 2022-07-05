import Card from '../../UI/Button/Button';

import classes from './ReasonList.module.css';

const ReasonList = (props) => {
  return (
    <Card className={classes.items}>
      <h4>Reasons to love Andie</h4>
      <ul>
        {props.items.map((reason) => (
          <li key={reason.id}>
            {reason.text}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ReasonList;