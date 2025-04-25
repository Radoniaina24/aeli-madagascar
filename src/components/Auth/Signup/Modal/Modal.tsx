import React from "react";
import { useFormPassContext } from "../context/SignupContext";
import Link from "next/link";
import { FaCheck, FaHome } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

export default function Modal() {
  const { showSuccessModal } = useFormPassContext();
  const modal = showSuccessModal ? (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
        <div className="text-center">
          <div className="text-green-600 text-6xl mb-4 flex justify-center">
            <FaCircleCheck />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Candidature envoyée avec succès !
          </h3>

          <div className="bg-blue-50 p-4 rounded-lg text-start my-5">
            <h4 className="font-bold text-blue-800 mb-2">Prochaines étapes</h4>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
              <li>
                Vérification de votre dossier par notre équipe d'admission (3-5
                jours ouvrables)
              </li>
              <li>
                Notification par email de la recevabilité de votre candidature
              </li>
              <li>
                Si votre dossier est retenu, invitation à un entretien (en
                personne ou en ligne)
              </li>
              <li>Décision finale d'admission communiquée par email</li>
              <li>
                En cas d'admission, paiement des frais d'inscription pour
                confirmer votre place
              </li>
            </ol>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              href="/"
              data-readdy="true"
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded flex items-center hover:bg-gray-300 transition duration-300 whitespace-nowrap"
            >
              <FaHome className=" mr-2" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
  return modal;
}
