import * as React from "react";

import { Button, Jumbotron, Alert } from "react-bootstrap";
import { AlertTriangle, Info } from "react-feather";

import { Link } from "react-router-dom";

import { Panel } from "./Panel";

export const Intro: React.FC = () => {
  return (
    <div>
      <br />
      <Jumbotron style={{ padding: "2em" }}>
        <h1>MétéoMapps</h1>
        <br />
        Le tableau de bord présente les données aggrégées issues de plusieurs
        outils qui évaluent chaque URL automatiquement et indépendamment.
        <br />
        <br />
        Vous pouvez soumettre de nouvelles URLs, proposer des corrections ou
        consulter la roadmap en{" "}
        <a
          href="https://github.com/SocialGouv/dnum-dashboard/issues/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          cliquant ici
        </a>
        .
        <br />
        <br />
        <br />
        <br />
        <Link to="/dashboard">
          <Button
            variant="dark"
            href="https://developers.google.com/web/tools/lighthouse"
          >
            Accéder au tableau de bord
          </Button>
        </Link>
      </Jumbotron>

      <Panel title="Google Lighthouse">
        Permet un audit automatique de page web :
        <br />
        <br />
        <li>Performances de chargement</li>
        <li>Bonnes pratiques SEO (référencement)</li>
        <li>Bonnes pratiques accessibilité (moteur Axe)</li>
        <li>Bonnes pratiques web</li>
        <br />
        <Alert variant="info">
          <Info size={16} style={{ marginRight: 5 }} />
          L'audit complet avec les recommandations de correction est disponible
          pour chaque URL
        </Alert>
        <Alert variant="warning">
          <AlertTriangle size={16} style={{ marginRight: 5 }} />
          Les mesures de performance, sont un instantané, donc pas forcément
          représentatives
          <br />
          <AlertTriangle size={16} style={{ marginRight: 5 }} /> Les mesures
          d'accessibilité n'abordent pas du tout{" "}
          <a
            href="https://www.numerique.gouv.fr/publications/rgaa-accessibilite/"
            rel="noopener noreferrer"
            target="_blank"
          >
            le RGAA
          </a>
          .
        </Alert>
        <Button
          variant="dark"
          href="https://developers.google.com/web/tools/lighthouse"
        >
          Site officiel
        </Button>
      </Panel>
      <br />

      <Panel title="OWASP Zed Attack Proxy">
        Scan de vulnérabilités passif "baseline" qui permet de détecter des
        risques de sécurité.
        <br />
        <br />
        <li>Bonnes pratiques web</li>
        <li>Bonnes pratiques http</li>
        <br />
        <Alert variant="info">
          <Info size={16} style={{ marginRight: 5 }} />
          L'audit complet avec les recommandations de correction est disponible
          pour chaque URL
        </Alert>
        <Button
          variant="dark"
          href="https://www.zaproxy.org/docs/docker/baseline-scan/"
        >
          Site officiel
        </Button>
      </Panel>
      <br />

      <Panel title="SSLLabs">
        Évalue le niveau de confiance d'un certificat SSL
        <br />
        <br />
        <li>Bonnes pratiques de configuration</li>
        <li>Protocoles disponibles</li>
        <li>Compatibilité navigateurs</li>
        <li>Solidité des clés de chiffrement</li>
        <br />
        <Button
          variant="dark"
          href="https://www.ssllabs.com/ssltest/analyze.html"
        >
          Site officiel
        </Button>
      </Panel>
      <br />

      <Panel title="Mozilla HTTP observatory">
        Évalue le niveau de qualité/sécurité de la page web et de son serveur
        <br />
        <br />
        <li>Bonnes pratiques de configuration</li>
        <li>Bonnes pratiques web</li>
        <li>Solidité des clés de chiffrement</li>
        <br />
        <Button variant="dark" href="https://observatory.mozilla.org/">
          Site officiel
        </Button>
        <Button
          style={{ marginLeft: 5 }}
          variant="dark"
          href="https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/scoring.md"
        >
          Méthodologie
        </Button>
      </Panel>
      <br />

      <Panel title="Nucléi">
        Détecte plus de 700 erreurs de configuration courante sur les
        applications webs.
        <br />
        <br />
        <li>Sécurité</li>
        <li>Bonnes pratiques web</li>
        <br />
        <Button variant="dark" href="https://nuclei.projectdiscovery.io/">
          Site officiel
        </Button>
      </Panel>
      <br />

      <Panel title="Third-parties">
        Liste tous les scripts externes chargés par une URL et qui peuvent avoir
        un impact sur :
        <br />
        <br />
        <li>Performances web</li>
        <li>Sécurité</li>
        <li>Vie privée</li>
        <br />
        <Alert variant="warning">
          <AlertTriangle size={16} style={{ marginRight: 5 }} />
          Certains script légitimes peuvent apparaitre dans cette catégorie
          s'ils sont hébergés sur d'autres serveurs
        </Alert>
        <Button
          variant="dark"
          href="https://github.com/SocialGouv/dnum-dashboard/blob/master/src/thirdparties/trackers.js"
        >
          Code source
        </Button>
      </Panel>
      <br />

      <Panel title="GeoIP2">
        Géolocalise tous les serveurs contactés lors de l'ouverture d'une URL.
        <br />
        <br />
        <li>Vie privée</li>
        <br />
        <Button variant="dark" href="https://www.maxmind.com/en/geoip-demo">
          Site officiel
        </Button>
      </Panel>
    </div>
  );
};
