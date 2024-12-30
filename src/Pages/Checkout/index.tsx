// Importação de bibliotecas
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yop from 'yup'
// Importação de estilos do componente
import * as S from './styles'
// Importação de componentes
import Card from '../../components/Card'
import Button from '../../components/Button'
// Importação de imagens
import barcode from '../../assets/images/barcode.svg'
import creditcard from '../../assets/images/creditcard.svg'

const Checkout = () => {
  const [isCardActive, setIsCardActive] = useState(true)

  const formik = useFormik({
    initialValues: {
      // Dados gerais para qualquer cobrança
      name: '',
      email: '',
      cpf: '',
      destinationEmail: '',
      confirmDestinationEmail: '',

      // Dados de cobrança, apenas para cobrança em Cartão
      holderName: '',
      cardName: '',
      cardNumber: '',
      dueMonth: '',
      dueYear: '',
      cvv: '',
      installments: 1
    },
    validationSchema: Yop.object({
      // Validação obrigatória para todas as ocasioes de cobrança
      // Validação do nome
      name: Yop.string()
        .required('Campo obrigatório')
        .min(3, 'Nome muito curto')
        .max(100, 'Nome muito longo'),
      // Validação do e-mail
      email: Yop.string()
        .required('Campo obrigatório')
        .email('E-mail inválido'),
      // Validação do CPF
      cpf: Yop.string()
        .required('Campo obrigatório')
        .min(11, 'CPF inválido')
        .max(11, 'Digite apenas os numeros do CPF'),
      // Validação do e-mail de entrega de compra
      destinationEmail: Yop.string()
        .required('Campo obrigatório')
        .email('E-mail inválido'),
      // Validação da confirmação do e-mail de entrega de compra
      confirmDestinationEmail: Yop.string()
        .required('Campo obrigatório')
        .oneOf([Yop.ref('destinationEmail')], 'E-mails diferentes'),
      // Validaçoes para cobrança no Cartão
      // Validação do nome do titular
      holderName: Yop.string()
        .min(3, 'Nome muito curto')
        .max(100, 'Nome muito longo')
        .when((values, schema) =>
          isCardActive ? schema.required('Campo obrigatório') : schema
        ),
      // Validação do nome do cartão
      cardName: Yop.string()
        .min(3, 'Nome muito curto')
        .max(100, 'Nome muito longo')
        .when((values, schema) =>
          isCardActive ? schema.required('Campo obrigatório') : schema
        ),
      // Validação do nº do cartão
      cardNumber: Yop.string()
        .min(16, 'Nº do cartão invalido')
        .max(16, 'Nº do cartão invalido')
        .when((values, schema) =>
          isCardActive ? schema.required('Campo obrigatório') : schema
        ),
      // Validação do mês de vencimento
      dueMonth: Yop.string().when((values, schema) =>
        isCardActive ? schema.required('Campo obrigatório') : schema
      ),
      // Validação do ano de vencimento
      dueYear: Yop.string().when((values, schema) =>
        isCardActive ? schema.required('Campo obrigatório') : schema
      ),
      // Validação do CVV
      cvv: Yop.string()
        .min(3, 'inv')
        .when((values, schema) =>
          isCardActive ? schema.required('!!!') : schema
        )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <form className="container" onSubmit={formik.handleSubmit}>
      <Card title="Dados de cobrança">
        <>
          <S.Row>
            <S.LabelGrup>
              <label htmlFor="name">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.name ? 'error' : ''}
              />
              <small>{formik.errors.name}</small>
            </S.LabelGrup>
            <S.LabelGrup>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.email ? 'error' : ''}
              />
              <small>{formik.errors.email}</small>
            </S.LabelGrup>
            <S.LabelGrup>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formik.values.cpf}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.cpf ? 'error' : ''}
              />
              <small>{formik.errors.cpf}</small>
            </S.LabelGrup>
          </S.Row>
          <S.Title className="margin-top">
            Dados de entrega - conteúdo digital
          </S.Title>
          <S.Row>
            <S.LabelGrup>
              <label htmlFor="destinationEmail">E-mail</label>
              <input
                type="email"
                id="destinationEmail"
                name="destinationEmail"
                value={formik.values.destinationEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.destinationEmail ? 'error' : ''}
              />
              <small>{formik.errors.destinationEmail}</small>
            </S.LabelGrup>
            <S.LabelGrup>
              <label htmlFor="confirmDestinationEmail">Confirmar E-mail</label>
              <small>{formik.errors.confirmDestinationEmail}</small>
              <input
                type="email"
                id="confirmDestinationEmail"
                name="confirmDestinationEmail"
                value={formik.values.confirmDestinationEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.confirmDestinationEmail ? 'error' : ''}
              />
            </S.LabelGrup>
          </S.Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <S.ButtonDiv>
            <S.TabButton
              isActive={!isCardActive}
              onClick={() => setIsCardActive(false)}
            >
              <img src={barcode} alt="Pagamento com boleto" />
              <p>Boleto bancário</p>
            </S.TabButton>
            <S.TabButton
              isActive={isCardActive}
              onClick={() => setIsCardActive(true)}
            >
              <img src={creditcard} alt="Pagar com cartão de crédito" />
              <p>Cartão de crédito</p>
            </S.TabButton>
          </S.ButtonDiv>
          {isCardActive ? (
            <>
              <S.Row marginTop="16px">
                <S.LabelGrup>
                  <label htmlFor="holderName">Nome do titular do cartão</label>
                  <input
                    type="text"
                    id="holderName"
                    name="holderName"
                    value={formik.values.holderName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={formik.errors.holderName ? 'error' : ''}
                  />
                  <small>{formik.errors.holderName}</small>
                </S.LabelGrup>
                <S.LabelGrup>
                  <label htmlFor="cardName">Nome do cartão</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formik.values.cardName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={formik.errors.cardName ? 'error' : ''}
                  />
                  <small>{formik.errors.cardName}</small>
                </S.LabelGrup>
              </S.Row>
              <S.Row marginTop="16px">
                <S.LabelGrup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formik.values.cardNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={formik.errors.cardNumber ? 'error' : ''}
                  />
                  <small>{formik.errors.cardNumber}</small>
                </S.LabelGrup>
                <S.LabelGrup maxWidth="123px">
                  <label htmlFor="dueMonth">Mês de vencimento</label>
                  <input
                    type="text"
                    id="dueMonth"
                    name="dueMonth"
                    value={formik.values.dueMonth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={formik.errors.dueMonth ? 'error' : ''}
                  />
                  <small>{formik.errors.dueMonth}</small>
                </S.LabelGrup>
                <S.LabelGrup maxWidth="123px">
                  <label htmlFor="dueYear">Ano de vencimento</label>
                  <input
                    type="text"
                    id="dueYear"
                    name="dueYear"
                    value={formik.values.dueYear}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={formik.errors.dueYear ? 'error' : ''}
                  />
                  <small>{formik.errors.dueYear}</small>
                </S.LabelGrup>
                <S.LabelGrup maxWidth="48px">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formik.values.cvv}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={formik.errors.cvv ? 'error' : ''}
                  />
                  <small>{formik.errors.cvv}</small>
                </S.LabelGrup>
              </S.Row>
              <S.Row marginTop="16px">
                <S.LabelGrup maxWidth="116px">
                  <label htmlFor="installments">Parcelas</label>
                  <select
                    name="installments"
                    id="installments"
                    value={formik.values.installments}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value={1}>1x de R$ 200,00</option>
                    <option value={2}>2x de R$ 100,00</option>
                    <option value={3}>3x de R$ 66,67</option>
                  </select>
                </S.LabelGrup>
              </S.Row>
            </>
          ) : (
            <S.PaymentText>
              Ao optar por essa forma de pagamento, é importante lembrar que a
              confirmação pode levar até 3 dias úteis, devido aos prazos
              estabelecidos pelas instituições financeiras. Portanto, a
              liberação do código de ativação do jogo adquirido ocorrerá somente
              após a aprovação do pagamento do boleto.
            </S.PaymentText>
          )}
        </>
      </Card>
      <Button
        title="Clique aqui para adicionar ao carrinho"
        variant="secondary"
        type="button"
        onClick={formik.handleSubmit}
      >
        Finalizar compra
      </Button>
    </form>
  )
}

export default Checkout
