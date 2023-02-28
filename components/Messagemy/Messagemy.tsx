import React from 'react';
import { HtagProps, MessagemyForm, MessagemyResponse } from './Messagemy.props';
import styles from './Messagemy.module.scss';
import EmailIkon from './envelope-solid.svg';
import cn from 'classnames';
import { ToastContainer } from 'react-toastify';
import { Input } from '../Input/Input';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';

export const Messagemy = ({ children }: HtagProps): JSX.Element => {
	const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<MessagemyForm>();
	const onsubmitp = async (formData: MessagemyForm) => {

	};

	return (
		<div className={cn('row', styles.messaget)}>
			<div className='col-xl-6 col-lg-12'>
				<div className={styles.prim}>
					<div className={cn(styles.octagon, styles.d0)}></div>
					<div className={cn(styles.octagon, styles.d45)}></div>
					<div className={cn(styles.octagon, styles.d90)}></div>
					<div className={cn(styles.octagon, styles.d135)}></div>
					<EmailIkon />
				</div>
				<h2>Остались вопросы? Или хотите оставить отзыв. Заполните форму</h2>
			</div>
			<div className='col-xl-6 col-lg-12'>
				<div className={styles.from}>
					<form className={cn(styles.forma)} onSubmit={handleSubmit(onsubmitp)}>
						<div className={cn(styles.otxivforms)}>
							<h3>Тема письма:</h3>
							<select
								{...register('title', { required: { value: true, message: 'Заполните имя' } })}
								aria-invalid={errors.title ? true : false}
							>
								<option value="">—Выберите вариант—</option>
								<option value="Вопрос">Вопрос</option>
								<option value="Отзыв">Отзыв</option>
								<option value="Сотрудничество">Сотрудничество</option>
							</select>
							<h3>Ваше имя:</h3>
							<Input
								{...register('names', { required: { value: true, message: 'Заполните имя' } })}
								className={styles.names}
								aria-invalid={errors.names ? true : false}
							/>
							<h3>Ваше сообщение:</h3>
							<textarea
								{...register('roles', { required: { value: true, message: 'Заполните Пароль' } })}
								className={styles.title}
								aria-invalid={errors.title ? true : false}
							/>
							<div className={styles.submit}>
								<Button appearance={'none'}>Отправить</Button>
							</div>
							<ToastContainer position="bottom-center" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};