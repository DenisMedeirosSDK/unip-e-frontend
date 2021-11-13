import React from 'react';
import Link from 'next/link';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { SurveyQuestions } from '../../components/SurveyQuestions';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import UnipLogoSvg from '../../assets/logo-unip.svg';

import { attachmentsTemplateSurveys } from '../../templates/attachmentsTemplateSurveys';
import { generatePDFMake } from '../../utils/generatePDFMake';

import styles from '../../styles/pages/surveyPerformace.module.scss';

const schema = Yup.object({
  average01: Yup.string()
    .max(2, 'No máximo 2 caracteres')
    .required('É obrigatorio responder essa questão.'),
  average02: Yup.string()
    .max(2, 'No máximo 2 caracteres')
    .required('É obrigatorio responder essa questão.'),
  average03: Yup.string()
    .max(2, 'No máximo 2 caracteres')
    .required('É obrigatorio responder essa questão.'),
  average04: Yup.string()
    .max(2, 'No máximo 2 caracteres')
    .required('É obrigatorio responder essa questão.'),
  average05: Yup.string()
    .max(2, 'No máximo 2 caracteres')
    .required('É obrigatorio responder essa questão.'),
  average06: Yup.string()
    .max(2, 'No máximo 2 caracteres')
    .required('É obrigatorio responder essa questão.'),
  average07: Yup.string()
    .max(2, 'No máximo 2 caracteres')
    .required('É obrigatorio responder essa questão.'),
  average08: Yup.string()
    .max(2, 'No máximo 2 caracteres')
    .required('É obrigatorio responder essa questão.'),
  average09: Yup.string()
    .max(2, 'No máximo 2 caracteres')
    .required('É obrigatorio responder essa questão.'),
  average10: Yup.string()
    .max(2, 'No máximo 2 caracteres')
    .required('É obrigatorio responder essa questão.'),
  average11: Yup.string()
    .max(2, 'No máximo 2 caracteres')
    .required('É obrigatorio responder essa questão.'),
  average12: Yup.string()
    .max(2, 'No máximo 2 caracteres')
    .required('É obrigatorio responder essa questão.'),
  average13: Yup.string()
    .max(2, 'No máximo 2 caracteres')
    .required('É obrigatorio responder essa questão.'),
  average14: Yup.string().required('É obrigatorio responder essa questão.'),
  average15: Yup.string().required('É obrigatorio responder essa questão.'),
  average16: Yup.string(),
  average17: Yup.string().required('É obrigatorio responder essa questão.'),
  average18: Yup.string(),
});

interface IAverages {
  average01: string;
  average02: string;
  average03: string;
  average04: string;
  average05: string;
  average06: string;
  average07: string;
  average08: string;
  average09: string;
  average10: string;
  average11: string;
  average12: string;
  average13: string;
  average14: string;
  average15: string;
  average16: string;
  average17: string;
  average18: string;
}

export default function Performace2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAverages>({
    resolver: yupResolver(schema) as any,
    reValidateMode: 'onChange',
    mode: 'all',
  });

  function onSubmit(dataInfo: IAverages) {
    generatePDFMake(attachmentsTemplateSurveys(dataInfo));
    reset(dataInfo);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className={styles.legend}>
            Insuficiente: até 2,9 | Regular: 3 a 6,9 | Bom: 7 a 8,9 | Excelente:
            9 a 10
          </p>
          <section className={styles.sectionInfo}>
            <div>
              <SurveyQuestions
                title="APRESENTAÇÃO PESSOAL"
                question="adequação do traje ao ambiente de trabalho, observância das normas da empresa."
              />
              <Input
                name="average01"
                register={register('average01')}
                title=""
                type="number"
                min="0"
                max="10"
                required
                placeholder="Nota - 0 a 10"
                error={errors.average01}
                maxLength={2}
              />
            </div>
            <div>
              <SurveyQuestions
                title="ASSIDUIDADE E PONTUALIDADE"
                question="comparecimento com regularidade às atividades e cumprimento dos horários e prazos estabelecidos."
              />
              <Input
                name="average02"
                register={register('average02')}
                title=""
                type="number"
                min="0"
                max="10"
                required
                placeholder="Nota - 0 a 10"
                error={errors.average02}
                maxLength={2}
              />
            </div>
            <div>
              <SurveyQuestions
                title="COMPETÊNCIA"
                question="capacidade técnica para execução de tarefas."
              />
              <Input
                name="average03"
                register={register('average03')}
                title=""
                type="number"
                min="0"
                max="10"
                required
                placeholder="Nota - 0 a 10"
                error={errors.average03}
                maxLength={2}
              />
            </div>
            <div>
              <SurveyQuestions
                title="CONHECIMENTO TEÓRICO"
                question="conhecimento teórico demonstrado no cumprimento do estágio."
              />
              <Input
                name="average04"
                register={register('average04')}
                title=""
                type="number"
                min="0"
                max="10"
                required
                placeholder="Nota - 0 a 10"
                error={errors.average04}
                maxLength={2}
              />
            </div>
            <div>
              <SurveyQuestions
                title="COOPERAÇÃO"
                question="atuação junto a outras pessoas no sentido de contribuir para o alcance de um objetivo comum."
              />
              <Input
                name="average05"
                register={register('average05')}
                title=""
                type="number"
                min="0"
                max="10"
                required
                placeholder="Nota - 0 a 10"
                error={errors.average05}
                maxLength={2}
              />
            </div>
            <div>
              <SurveyQuestions
                title="DESEMPENHO"
                question="rapidez, precisão e qualidade na execução das tarefas."
              />
              <Input
                name="average06"
                register={register('average06')}
                title=""
                type="number"
                min="0"
                max="10"
                required
                placeholder="Nota - 0 a 10"
                error={errors.average06}
                maxLength={2}
              />
            </div>
            <div>
              <SurveyQuestions
                title="FACILIDADE DE COMPREENSÃO"
                question="capacidade  de  entender, interpretar e por em prática instruções recebidas."
              />
              <Input
                name="average07"
                register={register('average07')}
                title=""
                type="number"
                min="0"
                max="10"
                required
                placeholder="Nota - 0 a 10"
                error={errors.average07}
                maxLength={2}
              />
            </div>
            <div>
              <SurveyQuestions
                title="INICIATIVA"
                question="capacidade de procurar novas soluções, sem prévia orientação."
              />
              <Input
                name="average08"
                register={register('average08')}
                title=""
                type="number"
                min="0"
                max="10"
                required
                placeholder="Nota - 0 a 10"
                error={errors.average08}
                maxLength={2}
              />
            </div>
            <div>
              <SurveyQuestions
                title="INTERESSE"
                question="empenho em superar as suas próprias limitações."
              />
              <Input
                name="average09"
                register={register('average09')}
                title=""
                type="number"
                min="0"
                max="10"
                required
                placeholder="Nota - 0 a 10"
                error={errors.average09}
                maxLength={2}
              />
            </div>
            <div>
              <SurveyQuestions
                title="LIDERANÇA"
                question="capacidade de dirigir um grupo de pessoas na execução de uma tarefa."
              />
              <Input
                name="average10"
                register={register('average10')}
                title=""
                type="number"
                min="0"
                max="10"
                required
                placeholder="Nota - 0 a 10"
                error={errors.average10}
                maxLength={2}
              />
            </div>
            <div>
              <SurveyQuestions
                title="ORGANIZAÇÃO"
                question="capacidade de planejamento e preparo da execução de uma tarefa."
              />

              <Input
                name="average11"
                register={register('average11')}
                title=""
                type="number"
                min="0"
                max="10"
                required
                placeholder="Nota - 0 a 10"
                error={errors.average11}
                maxLength={2}
              />
            </div>
            <div>
              <SurveyQuestions
                title="REDAÇÃO"
                question="clareza, precisão, objetividade e correção no uso da língua escrita."
              />
              <Input
                name="average12"
                register={register('average12')}
                title=""
                type="number"
                min="0"
                max="10"
                required
                placeholder="Nota - 0 a 10"
                error={errors.average12}
                maxLength={2}
              />
            </div>
            <div>
              <SurveyQuestions
                title="RESPONSABILIDADE"
                question="cumprimento dos prazos estabelecidos e zelo pôr materiais, equipamentos ou instalações que lhe são confiados."
              />
              <Input
                name="average13"
                register={register('average13')}
                title=""
                type="number"
                min="0"
                max="10"
                required
                placeholder="Nota - 0 a 10"
                error={errors.average13}
                maxLength={2}
              />
            </div>
          </section>

          <div className={styles.divider} />
          <section className={styles.sectionInfo}>
            <Input
              name="average14"
              register={register('average14')}
              placeholder="Sim ou Não"
              title="O estágio foi útil para o estudante?"
              error={errors.average14}
            />
            <Input
              name="average15"
              register={register('average15')}
              placeholder="Sim ou Não"
              title="O estágio foi útil pela Unidade Concedente?"
              error={errors.average15}
            />
            <Input
              name="average16"
              register={register('average16')}
              placeholder="Sugestão de melhoras"
              title="No caso das respostas serem negativas, que medidas podem ser tomadas para a sua efetiva correção e continuidade"
              error={errors.average16}
            />
            <Input
              name="average17"
              register={register('average17')}
              placeholder="Sim ou Não"
              title="O estagiário passou a pertencer ao quadro de da Unidade Concedente, após o encerramento do estágio?"
              error={errors.average17}
            />
            <Input
              name="average18"
              register={register('average18')}
              placeholder="Função / Cargo"
              title="Em caso positivo, em que nível e função foi admitido?"
              error={errors.average18}
            />
          </section>
          <div className={styles.divider} />
          <Button title="Gerar relatorio de performace" type="submit" />
        </form>
      </div>
    </div>
  );
}
