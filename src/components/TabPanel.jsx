export default function TabPanel(props) {
    const { children, tabs, index } = props;

    return (
      <div
          hidden={tabs[index] !== '#3E8DE3'}
      > 
        {children}
      </div>
    );
}
