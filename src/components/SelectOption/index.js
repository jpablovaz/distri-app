import React, { useEffect } from 'react'
import styles from './styles.module.css'

const SelectOption = (props) => {
	const selectId = 'select-' + props.name.replace(/\s+/g, '-').toLowerCase()
	const spanId = 'span-' + props.name.replace(/\s+/g, '-').toLowerCase()
	const opId = 'op-' + props.name.replace(/\s+/g, '-').toLowerCase()
	const all = props.all
	const name = props.name
	const selectValue = Number(props.value)
	const style = {
		width: props.width,
	}

	const selectOptions = (
		<select value={selectValue === 0 ? null : selectValue}>
			<option value="-1">{props.name}</option>
			<option id={opId} value="0">
				{props.all}
			</option>
			{props.options.map((op, index) => {
				return (
					<option key={index} value={op.id}>
						{op[props.fieldToShow]}
					</option>
				)
			})}
		</select>
	)

	useEffect(() => {
		var x, j, ll, selElmnt, a, b, c
		/* Look for any elements with the class "custom-select": */
		x = document.getElementById(selectId)
		x.querySelectorAll('.'+styles.selected).forEach((e) => e.remove())
		x.querySelectorAll('.'+styles.items).forEach((e) => e.remove())
		selElmnt = x.getElementsByTagName('select')[0]
		ll = selElmnt.length
		/* For each element, create a new DIV that will act as the selected item: */
		a = document.createElement('DIV')
		if (selectValue === 0 || selectValue === null)
			a.setAttribute('class', styles.selected + ' ' + styles.gray)
		else a.setAttribute('class', styles.selected)
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
		x.appendChild(a)
		/* For each element, create a new DIV that will contain the option list: */
		b = document.createElement('DIV')
		b.setAttribute('class', styles.items + ' display-none')
		for (j = 1; j < ll; j++) {
			/* For each option in the original select element,
			create a new DIV that will act as an option item: */
			c = document.createElement('DIV')
			c.innerHTML = selElmnt.options[j].innerHTML
			c.addEventListener('click', function (e) {
				/* When an item is clicked, update the original select box,
				and the selected item: */
				var sp = document.getElementById(spanId)
				var op = null

				sp.classList.remove('display-none')
				var y, i, k, s, h, sl, yl
				s = this.parentNode.parentNode.getElementsByTagName('select')[0]
				sl = s.length
				h = this.parentNode.previousSibling
				for (i = 0; i < sl; i++) {
					if (s.options[i].innerHTML === this.innerHTML) {
						s.selectedIndex = i
						h.innerHTML = this.innerHTML
						y = this.parentNode.getElementsByClassName(
							styles.sameAsSelected
						)
						yl = y.length
						for (k = 0; k < yl; k++) {
							y[k].removeAttribute('class')
						}
						this.setAttribute('class', styles.sameAsSelected)
						break
					}
				}
				h.click()
				let criteria = {}
				criteria[props.field] = s.value
				props.run(criteria)
				op = document.querySelector(
					'#' + selectId + ' .' + styles.selected
				)
				if (e.target.firstChild.nodeValue === all) {
					op.innerHTML = name
					op.classList.add(styles.gray)
					sp.classList.add('display-none')
				} else {
					op.classList.remove(styles.gray)
				}
			})
			b.appendChild(c)
		}

		var sp = document.getElementById(spanId)
		var op = document.querySelector('#' + selectId + ' .' + styles.selected)

		if (selectValue === 0 || selectValue === null) {
			op.innerHTML = name
			op.classList.add(styles.gray)
			sp.classList.add('display-none')
		} else {
			op.classList.remove(styles.gray)
			sp.classList.remove('display-none')
		}
		x.appendChild(b)
		a.addEventListener('click', function (e) {
			/* When the select box is clicked, close any other select boxes,
			and open/close the current select box: */
			e.stopPropagation()
			closeAllSelect(this)
			this.nextSibling.classList.toggle('display-none')
			this.classList.toggle(styles.arrowActive)
		})

		function closeAllSelect(elmnt) {
			/* A function that will close all select boxes in the document,
			except the current select box: */
			var x,
				y,
				i,
				xl,
				yl,
				arrNo = []
			x = document.getElementsByClassName(styles.items)
			y = document.getElementsByClassName(styles.selected)
			xl = x.length
			yl = y.length
			for (i = 0; i < yl; i++) {
				if (elmnt === y[i]) {
					arrNo.push(i)
				} else {
					y[i].classList.remove(styles.arrowActive)
				}
			}
			for (i = 0; i < xl; i++) {
				if (arrNo.indexOf(i)) {
					x[i].classList.add('display-none')
				}
			}
		}
		/* If the user clicks anywhere outside the select box,
		then close all select boxes: */
		document.addEventListener('click', closeAllSelect)
	}, [props.options])

	return (
		<div
			style={style}
			className={styles.borderContainer + ' ' + styles.rightPadding}
		>
			<div id={selectId} className={styles.select}>
				<span className="display-none" id={spanId}>
					{props.name}
				</span>
				{selectOptions}
			</div>
		</div>
	)
}

export default SelectOption
