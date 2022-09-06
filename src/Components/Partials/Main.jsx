import Style from '../../Assets/scss/Main.module.scss'

export const Main = props => {
	return (
		<main className={Style.main}>
			{props.children}
		</main>
	)
}

