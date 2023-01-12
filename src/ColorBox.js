export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "35px",
    width: "377px",
    marginTop: "10px",
    align: "center"
  };

  return (
    <div style={styles}></div>
  );
}
