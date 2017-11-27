# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Interest.destroy_all
Profile.destroy_all
Pastmember.destroy_all
Labmethod.destroy_all
Methodtype.destroy_all
User.destroy_all

admin1= User.create(email: "user@test.com", admin: true, password: "123456")


Interest.create(description: "Grashoff, C., et al., Measuring mechanical tension across vinculin reveals regulation of focal adhesion dynamics. Nature, 2010. 466(7303): p. 263-6.",
                link: "https://doi.org/10.1038/nature09198",
                interest_type: 1)

Interest.create(description: "Kumar, A., et al., Talin tension sensor measurements reveal novel features of focal adhesion force transmission and mechanosensitivity. J. Cell Biol., 2016. 213(3): p. 371–383.",
                link: "https://dx.doi.org/10.1083%2Fjcb.201510012",
                interest_type: 1)

Interest.create(description: "Humphrey JD, et al., Mechanotransduction and extracellular matrix homeostasis. Nat Rev Mol Cell Biol., 2014. 15(12): p. 802-12.",
                link: "https://doi.org/10.1038/nrm3896",
                interest_type: 1)
				
Interest.create(description: "Ross, T.D., et al., Integrins in mechanotransduction. Curr. Opin. Cell Biol., 2013. 25(5): p. 613-618.",
                link: "https://doi.org/10.1016/j.ceb.2013.05.006",
                interest_type: 1)

# interest 2				
Interest.create(description: "Yun, S. et al., Interaction between integrin α 5 and PDE4D regulates endothelial inflammatory signalling. Nat. Cell. Biol., 2016. 18(10): p. 1043-1053.",
                link: "https://doi.org/10.1038/ncb3405",
                interest_type: 2)
Interest.create(description: "Baeyens, N. et al., Defective fluid shear stress mechanotransduction mediates hereditary hemorrhagic telangiectasia, J. Cell. Biol., 2016. 214(7): p. 807-816.",
                link: "https://doi.org/10.1083/jcb.201603106",
                interest_type: 2)
Interest.create(description: "Baeyens, N. et al., Endothelial fluid shear stress sensing in vascular health and disease. J. Clin. Invest., 2016. 126(3): p. 821-828.",
                link: "https://doi.org/10.1172/JCI83083",
                interest_type: 2)
Interest.create(description: "Coon, B.G. et al., Intramembrane binding of VE-cadherin to VEGFR2 and VEGFR3 assembles the endothelial mechanosensory complex. J. Cell Biol, 2015. 208(7): p.975",
                link: "https://doi.org/10.1083/jcb.201408103",
                interest_type: 2)
Interest.create(description: "Baeyens, N., et al., Vascular remodeling is governed by a VEGFR3-dependent fluid shear stress set point. Elife, 2015. 4: e04645.",
                link: "https://doi.org/10.7554/eLife.04645",
                interest_type: 2)
Interest.create(description: "Conway, D.E., et al., Fluid shear stress on endothelial cells modulates mechanical tension across VE-cadherin and PECAM-1. Curr Biol, 2013. 23(11): p. 1024-30.",
                link: "https://doi.org/10.1016/j.cub.2013.04.049",
                interest_type: 2)
			

Profile.create(name: "Sangeok Youn",
               email: "Sangeok.Youn@yale.edu",
               description: "Brian Cool is a Research Scientist working on the following: Functional screens for endothelial shear stress pathways using CRISPR/Cas libraries; Biochemistry and cell biology studies to identify mechanosensors and mechanotransducers; Testing function of new mechanotransduction machinery In Vivo",
               img_url: "sangeok.jpg")			   

Profile.create(name: "Brian Coon",
               email: "brian.coon@yale.edu",
               description: "Brian Cool is a Research Scientist working on the following: Functional screens for endothelial shear stress pathways using CRISPR/Cas libraries; Biochemistry and cell biology studies to identify mechanosensors and mechanotransducers; Testing function of new mechanotransduction machinery In Vivo",
               img_url: "brian.jpg")
			   
Profile.create(name: "Keiichiro Tanaka",
               email: "keiichiro.tanaka@yale.edu",
               description: "Brian Cool is a Research Scientist working on the following: Functional screens for endothelial shear stress pathways using CRISPR/Cas libraries; Biochemistry and cell biology studies to identify mechanosensors and mechanotransducers; Testing function of new mechanotransduction machinery In Vivo",
               img_url: "brian.jpg")

Profile.create(name: "Abhishek Kumar",
               email: "keiichiro.tanaka@yale.edu",
               description: "Brian Cool is a Research Scientist working on the following: Functional screens for endothelial shear stress pathways using CRISPR/Cas libraries; Biochemistry and cell biology studies to identify mechanosensors and mechanotransducers; Testing function of new mechanotransduction machinery In Vivo",
               img_url: "brian.jpg")			   
			   
Profile.create(name: "Tristan Driscoll",
               email: "tristan.driscoll@yale.edu",
               description: "Dr. Driscoll is a Postdoctoral Fellow in Cardiovascular Medicine at Yale University. He obtained his undergraduate degree in Biomedical Engineering at the University of Minnesota (2009), where he worked as a laboratory technician under Dr. Kevin Wickman in the department of pharmacology. For his Ph.D. work, Dr. Driscoll moved to the University of Pennsylvania (2015), where he studied bioengineering under the direction of Dr. Robert Mauck. Dr. Driscollís initial work focused on the mechanics and biochemical content of engineered fibrocartilage. For his thesis work, he focused on mechanobiology of mesenchymal stem cells, studying structural components of the cytoskeleton and nucleuoskeleton that regulate the response of these cells to static and dynamic tensile stretch. Upon completion of his graduate work, Dr. Driscoll started his postdoctoral studies at the Yale Cardiovascular Research Center in January 2015 under the guidance of Dr. Martin Schwartz, where he is currently focused on the influence of substrate stiffness on the mechanics and dynamics of the cytoskeleton and its connections to integrin based adhesions.",
               img_url: "tristan.jpg")

Profile.create(name: "Elizabeth Min",
               email: "gyongju.min@yale.edu",
               description: "Brian Cool is a Research Scientist working on the following: Functional screens for endothelial shear stress pathways using CRISPR/Cas libraries; Biochemistry and cell biology studies to identify mechanosensors and mechanotransducers; Testing function of new mechanotransduction machinery In Vivo",
               img_url: "brian.jpg")
			   
Profile.create(name: "Charlene Jouy",
               email: "charlene.jouy@postgrad.manchester.ac.uk",
               description: "Charlene is a PhD student in Martin Schwartz Lab in the Wellcome Trust Center for Cell and Matrix research at the University of Manchester. She obtained a bioengineering degree at Polytech Nice Sophia-University of Nice Sopia Antipolis (France-2016), where she had various internships in neurobiology (LNBT-University of Angers - 2013) and cardiovascular labs (BNMI- University of Angers -2014; Yale cardiovascular research center – Yale University-2015). Under the supervision of Dr.Martin Schwartz she studied the impact of a metabolic modulation on endothelial cells mechanosensitivity to fluid shear stress. Charlene started her PhD program at the University of Manchester in September 2016 under the guidance of Dr. Martin Schwartz, where she is currently focused on the central role for strain direction in cardiac fibrosis and its consequences on cardiac fibroblasts fate and cardiac extracellular matrix.",               
			   img_url: "charlene.png")
			   
Profile.create(name: "Rui Hui",
               email: "rui.hui@yale.edu",
               description: "Dr. Hu obtained his M.D. degree, major in clinical medicine, in Wuhan University (2014) and worked as a cardiovascular surgeon for 2 years, he subsequently started his postdoctoral training under the guidance of Dr. Martin Schwartz at Yale Cardiovascular Center, where he mainly focuses on abnormal mechanotransduction in aortic aneurysm and dissection initiating and progression.",               
			   img_url: "brian.jpg")
			   
			   Profile.create(name: "Sang Joon Ahn",
               email: "sangjoon.ahn@yale.edu",
               description: "Brian Cool is a Research Scientist working on the following: Functional screens for endothelial shear stress pathways using CRISPR/Cas libraries; Biochemistry and cell biology studies to identify mechanosensors and mechanotransducers; Testing function of new mechanotransduction machinery In Vivo",
               img_url: "brian.jpg")


# Profile.create(name: "Brian Coon",
#                email: "Bcoon@gmail.com",
#                description: "asdfasdfas",
#                img_url: "brian.jpg")
#
#  Profile.create(name: "Tristan",
#                 email: "tristain2@gmail.com",
#                 description: "test file 2",
#                 img_url: "tristan.jpg")
#
# Profile.create(name: "Tristan",
#                email: "tristain2@gmail.com",
#                description: "test file 2",
#                img_url: "brian.jpg")

Pastmember.create(name: "Nicolas Baeyens", email: "Nicolas.Baeyens@ulb.ac.be")
Pastmember.create(name: "Alton Brown", email: "alton@gmail.com")


biological = Methodtype.create(method_type: "biological")
programming = Methodtype.create(method_type: "programming")
philosophy = Methodtype.create(method_type: "philosophy")

Labmethod.create(title: "ECGS Quantification", pdf_url: "ECGS_quantification.pdf", methodtype: biological)
Labmethod.create(title: "Making ECGS", pdf_url: "Making ECGS.pdf", methodtype: biological)
Labmethod.create(title: "FN Buffers", pdf_url: "FN Buffers.pdf", methodtype: biological)
Labmethod.create(title: "FN purification", pdf_url: "FN purification.pdf", methodtype: biological)
Labmethod.create(title: "Making competent cell stock", pdf_url: "competent_cell_stock.pdf", methodtype: biological)
Labmethod.create(title: "SOB SOC and Inoue Prep", pdf_url: "sob-soc-inoue-prep.pdf", methodtype: biological)


Labmethod.create(title: "program 1", pdf_url: "animalFacts.pdf", methodtype: programming)
Labmethod.create(title: "program 2", pdf_url: "animalFacts.pdf", methodtype: programming)

Labmethod.create(title: "philo 1", pdf_url: "animalFacts.pdf", methodtype: philosophy)
Labmethod.create(title: "philo 2", pdf_url: "animalFacts.pdf", methodtype: philosophy)
