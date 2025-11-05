import java.util.Arrays;
import java.util.Scanner;


//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
//challenge4:
                Scanner scanner = new Scanner(System.in);
                double solde = 500.0;
                int choix;

                do {
                    System.out.println("\n=== Mini Distributeur ===");
                    System.out.println("1. Consulter le solde");
                    System.out.println("2. Dépôt");
                    System.out.println("3. Retrait");
                    System.out.println("4. Quitter");
                    System.out.print("Entrez votre choix : ");
                    choix = scanner.nextInt();

                    switch (choix) {
                        case 1:
                            System.out.println("Votre solde actuel est : " + solde + " €");
                            break;

                        case 2:
                            System.out.print("Entrez le montant à déposer : ");
                            double depot = scanner.nextDouble();
                            solde += depot;
                            System.out.println("Dépôt de " + depot + " € effectué avec succès.");
                            break;

                        case 3:
                            System.out.print("Entrez le montant à retirer : ");
                            double retrait = scanner.nextDouble();
                            if (retrait <= solde) {
                                solde -= retrait;
                                System.out.println("Retrait de " + retrait + " € effectué avec succès.");
                            } else {
                                System.out.println("Solde insuffisant !");
                            }
                            break;

                        case 4:
                            System.out.println("Merci d'avoir utilisé le distributeur. À bientôt !");
                            break;

                        default:
                            System.out.println("Choix invalide, veuillez réessayer.");
                    }

                } while (choix != 4);


        //challenge5:
        int[] n = {4, 9, 1, 7, 3};
        int max  = n[0];

        for (int i = 0; i < n.length; i++) {

            if (n[i] > max){
                max = n[i];
            }

        }
        System.out.println(max);

        int max2  = n[0];
        for (int i = 0; i < n.length; i++) {
            if (max2 == max){
                continue;
            }
            if (n[i] > max2 && n[i] < max){
                max2 = n[i];

            }

        }
        System.out.println("le premier nomber est :"+max);
        System.out.println("la deuxiem nomber est :"+max2);

    }
}
