import egor from '../assets/workers/Egor.png'
import sasha from '../assets/workers/sasha.png'
import Zhenya from '../assets/workers/Zhenya.png'
const Workers = () => {
    return  (
        <div className={'workers-wrapper'}>
            <div className="title">Наші робітники</div>
            <div className='workers-container'>
                <div>
                    <div className='worker-desc'>
                        <img className={'worker-img'} src={egor}/>
                        <div>
                            Професійна мета: Кваліфікований майстер авторемонту з більш ніж 10-річним досвідом у роботі.
                            Маю великий досвід у діагностиці та ремонті різних марок автомобілів. Здатен ефективно
                            вирішувати технічні проблеми, дотримуючись високих стандартів якості та терміновості.

                            Навички та компетенції:

                            Досвід у роботі з електричною та механічною системами автомобілів.
                            Вміння проводити комплексну діагностику та виявлення несправностей.
                            Ефективне використання сучасного обладнання та інструментів.
                            Знання технічної документації та специфікацій автовиробників.
                            Відмінні навички роботи з клієнтами та висока відповідальність.
                            Освіта:
                            Дипломований спеціаліст з автомобільного ремонту.

                            Досвід роботи:
                            Майстер авторемонту в автосервісі "Експерт-Авто" (2012-нині)
                        </div>
                    </div>
                    <div className="worker-column">
                        <div>Єгор Коляденко</div>
                        <div>47 років</div>
                    </div>
                </div>
                <div>
                    <div className='worker-desc'>
                        <img className={'worker-img'} src={sasha}/>
                        <div>
                            Професійна мета: Майстер авторемонту з ентузіазмом до сучасних технічних рішень та інновацій у галузі автомобільного сервісу. Зацікавлений у вдосконаленні навичок та постійному вивченні нових технологій для забезпечення високої якості обслуговування.

                            Навички та компетенції:

                            Експертність у використанні сучасного обладнання та інструментів для діагностики та ремонту автомобілів.
                            Відмінне розуміння систем електроніки та механіки авто.
                            Здатність працювати з різними марками транспортних засобів.
                            Вміння ефективно вирішувати завдання в умовах обмеженого часу.
                            Високий рівень відповідальності та уважності до деталей.
                            Освіта:
                            Технічне вище освітнє заклад (спеціальність: Автомобільний сервіс).

                            Досвід роботи:
                            Майстер авторемонту в автосервісі "Технічний Прогрес" (2015-нині)
                        </div>
                    </div>
                    <div className="worker-column">
                        <div>Олександр Шигапов</div>
                        <div>48 років</div>
                    </div>
                </div>
                <div>
                    <div className='worker-desc'>
                        <img className={'worker-img'} src={Zhenya}/>
                        <div>
                            Професійна мета: Досвідчений майстер авторемонту із спрямуванням на високу якість робіт та індивідуальний підхід до кожного клієнта. Зацікавлений у розвитку власних навичок та впровадженні новітніх технічних рішень у сфері автомобільного сервісу.

                            Навички та компетенції:

                            Широкий досвід у діагностиці та ремонті різних систем автомобілів.
                            Знання сучасних технологій та використання передового обладнання.
                            Висока ефективність у виявленні та усуненні несправностей.
                            Відмінне володіння ручним та електронним інструментарієм.
                            Особливий акцент на забезпеченні задоволення клієнтів та вирішенні їхніх проблем.
                            Освіта:
                            Дипломований фахівець з автомобільного ремонту та обслуговування.

                            Досвід роботи:
                            Майстер авторемонту в автосервісі "МайстерАвто" (2010-нині)
                        </div>
                    </div>
                    <div className="worker-column">
                        <div>Євгеній Єгоров</div>
                        <div>54 років</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workers