import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  container: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center"
  }
}))

export default function Login() {
  const classes = useStyles()
  const history = useHistory()

  const handleLogin = () => {
    history.push("/admin/dashboard")
  }

  return (
    <div className={classes.container}>
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-secondary"
            label="User name"
            color="secondary"
          />
        </div>
        <div>
          <TextField
            id="standard-secondary"
            label="Password"
            color="secondary"
            type="password"
          />
        </div>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </div>
  )
}
