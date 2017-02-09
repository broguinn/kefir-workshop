(ns boguinn.functional-exercises
  (:require [clojure.string :refer [capitalize]]))

;; data
(def breakfast-meats ["bacon" "Bacon" "sausage" "Sausage"])

;; [map]
;; write a function that capitalizes each member of the collection
(println
 (map capitalize breakfast-meats)
 ) ; (Bacon Bacon Sausage Sausage)


;; [filter]
;; write a function that removes duplicates from a collection
;; (javascript port version)
(defn first-index-of [needle haystack]
  (first (keep-indexed #(when (= %2 needle) %1) haystack)))

(println
 (let [meats (map capitalize breakfast-meats)]
   (map second (filterv
                (fn [[index item]] (= index (first-index-of item meats)))
                (map-indexed vector meats))))
 ) ; (Bacon Sausage) hm... ^ seems complicated in clojure
;; (clojure idiomatic version)
(println
 (into [] (set (map capitalize breakfast-meats)))
 ) ; (Bacon Sausage)


;; [reduce]
;; define a pure 'wrap' function and use with reduce to produce "<p>Bacon</p><p>Sausage</p>"
(defn wrap [pre post] (fn [content word] (str content pre word post)))
(println
 (reduce (wrap "<p>" "</p>") "" (set (map capitalize breakfast-meats)))
) ;"<p>Bacon</p><p>Sausage</p>"
