const styles = (theme) => ({
  modal: {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 2),
  },
  textField: {
    width: `100%`
  },
  content:{
    padding: theme.spacing(0)
  }
});

export default styles;
